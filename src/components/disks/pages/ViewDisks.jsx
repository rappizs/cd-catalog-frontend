import React, { Component } from 'react'
import ViewTable from '../../common/Viewtable/ViewTable'
import { getDisks, deleteDisc, saveDisc } from '../../../services/discService';
import CreateDiskForm from '../view_page_components/CreateDiskForm';

export class ViewDisks extends Component {

    state = {
        discs: [],
        newDiscBtnClicked: false
    }

    componentDidMount() {
        this.getDisks();
    }

    getDisks() {
        getDisks()
            .then(resp => resp.json())
            .then(resp => this.setState({ discs: resp }));
    }

    deleteDisc(id) {
        deleteDisc(id)
            .then(() => this.getDisks());
    }

    saveDisc(disc) {
        saveDisc(disc.id, disc)
            .then(() => this.getDisks());
    }

    renderNewDiskForm() {
        const { newDiscBtnClicked } = this.state;

        if (newDiscBtnClicked) {
            return <CreateDiskForm getDisks={() => this.getDisks()}
                closeForm={() => this.setState({ newDiscBtnClicked: false })} />
        }
    }

    renderAddCdButton() {
        const { newDiscBtnClicked } = this.state;

        if (!newDiscBtnClicked) {
            return <button className="btn btn-secondary mb-2"
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

    render() {
        const theads = ["Title", "Artist", "Album", "Year", "Style", "Song count", ""];
        const attributes = ["title", "artist_id", "album", "year", "style_id", "song_count"]
        const { discs } = this.state;
        return (
            <>
                <div className="row">
                    <div className="col-1">
                        {this.renderAddCdButton()}
                    </div>
                    <div className="col">
                        {this.renderNewDiskForm()}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ViewTable deleteDisc={(id) => this.deleteDisc(id)}
                            save={(disc) => this.saveDisc(disc)}
                            theads={theads} rows={discs} attributes={attributes} />
                    </div>
                </div>
            </>
        )
    }
}

export default ViewDisks
