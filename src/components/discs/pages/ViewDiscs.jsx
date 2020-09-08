import React, { Component } from 'react'
import ViewTable from '../../common/Viewtable/ViewTable'
import { getDiscs, deleteDisc, saveDisc } from '../../../services/DiscService';
import CreateDiskForm from '../view_page_components/CreateDiscForm';
import Input from '../../common/Input';
import { getArtists } from '../../../services/ArtistService';
import { getStyles } from '../../../services/StyleService';

export class ViewCds extends Component {

    state = {
        discs: [],
        newDiscBtnClicked: false,
        searchValue: "",
        timeOut: null,
        artists: [],
        styles: [],
        orderBy: {
            attribute: "title",
            type: true
        }
    }

    componentDidMount() {
        this.getDiscs();
        this.getArtists();
        this.getStyles();
    }

    handleSearch(searchValue) {
        const state = this.state;

        if (state.timeOut) {
            clearTimeout(state.timeOut);
        }

        state.timeOut = setTimeout(() => this.getDiscs(), 500);
        state.searchValue = searchValue;

        this.setState(state);
    }

    getDiscs() {
        const { searchValue, orderBy } = this.state;

        getDiscs(searchValue, orderBy)
            .then(resp => resp.json())
            .then(resp => this.setState({ discs: resp }));
    }

    getArtists() {
        getArtists("")
            .then(resp => resp.json())
            .then(resp => this.setState({ artists: resp }));
    }

    getStyles() {
        getStyles("")
            .then(resp => resp.json())
            .then(resp => this.setState({ styles: resp }));
    }

    deleteDisc(id) {
        deleteDisc(id)
            .then(() => this.getDiscs());
    }

    saveDisc(disc) {
        saveDisc(disc.id, disc)
            .then(() => this.getDiscs());
    }

    renderNewDiskForm() {
        const { newDiscBtnClicked,
            artists,
            styles } = this.state;

        if (newDiscBtnClicked) {
            return <CreateDiskForm getDisks={() => this.getDiscs()}
                artists={artists} styles={styles}
                closeForm={() => this.setState({ newDiscBtnClicked: false })} />
        }
    }

    renderAddCdButton() {
        const { newDiscBtnClicked } = this.state;

        if (!newDiscBtnClicked) {
            return <button className="btn btn-secondary"
                onClick={() => this.setState({ newDiscBtnClicked: true })}>
                Add CD
            </button>
        }
        else {
            return <button className="btn btn-danger"
                onClick={() => this.setState({ newDiscBtnClicked: false })} >
                X
            </button>
        }
    }

    orderBy(attribute) {
        const { orderBy } = this.state;

        if (orderBy.attribute === attribute)
            orderBy.type = !orderBy.type;
        else {
            orderBy.type = "asc";
            orderBy.attribute = attribute;
        }

        this.setState({ orderBy: orderBy }, this.getDiscs);
    }

    render() {
        const theads = ["Title", "Artist", "Album", "Year", "Style", "Song count"];
        const attributes = ["title", "artist", "album", "year", "style", "song_count"]
        const { discs, searchValue,
            artists, styles } = this.state;

        return (
            <>
                <div className="row">
                    <div className="col-1">
                        {this.renderAddCdButton()}
                    </div>
                    <div className="col-6">
                        {this.renderNewDiskForm()}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="col">
                        <hr />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Input value={searchValue} palecholder="Search...."
                            onChange={(name, value) => this.handleSearch(value)} />
                    </div>
                    <div className="col">
                        <hr />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="col-md-12 col-lg-10 table-responsive">
                        <ViewTable deleteRow={(id) => this.deleteDisc(id)}
                            artists={artists} styles={styles}
                            save={(disc) => this.saveDisc(disc)}
                            orderBy={(attribute) => this.orderBy(attribute)}
                            theads={theads} rows={discs} attributes={attributes} />
                    </div>
                </div>
            </>
        )
    }
}

export default ViewCds
