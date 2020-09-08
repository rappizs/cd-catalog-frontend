import React, { Component } from 'react'
import { getArtists, deleteArtist, saveArtist, createArtist } from '../../../services/ArtistService';
import ViewTable from '../../common/viewtable/ViewTable';
import Input from '../../common/Input';

export class ViewArtists extends Component {

    state = {
        artists: [],
        searchValue: "",
        new_artist: "",
        timeOut: null,
        type: true
    }

    componentDidMount() {
        this.getArtists();
    }

    handleSearch(searchValue) {
        const state = this.state;

        if (state.timeOut) {
            clearTimeout(state.timeOut);
        }

        state.timeOut = setTimeout(() => this.getArtists(), 500);
        state.searchValue = searchValue;

        this.setState(state);
    }

    getArtists() {
        const { searchValue, type } = this.state;

        getArtists(searchValue, type)
            .then(resp => resp.json())
            .then(resp => this.setState({ artists: resp }));
    }

    deleteArtist(id) {
        deleteArtist(id)
            .then(() => this.getArtists());
    }

    saveArtist(artist) {
        saveArtist(artist.id, artist)
            .then(() => this.getArtists());
    }

    createArtist() {
        const { new_artist } = this.state;
        const data = {
            name: new_artist
        };

        createArtist(data)
            .then(() => {
                this.getArtists();
                this.setState({ new_artist: "" });
            }
            );
    }

    render() {
        const theads = ["Name"];
        const attributes = ["name"];
        const { artists, new_artist, searchValue } = this.state;

        return (
            <>
                <div className="row justify-content-center align-items-end">
                    <div className="col-md-4 col-lg-3">
                        <Input name="new" label="New artist" value={new_artist}
                            palecholder="New artist's name..."
                            onChange={(name, value) => this.setState({ new_artist: value })} />
                    </div>
                    <div className="col-md-2 col-lg-1 form-group">
                        <button className="btn btn-primary" onClick={() => this.createArtist()}>
                            Save
                        </button>
                    </div>
                </div>
                <div className="row justify-content-center align-items-end">
                    <div className="col-md-6 col-lg-4">
                        <hr />
                        <Input name="search" value={searchValue}
                            palecholder="Search...."
                            onChange={(name, value) => this.handleSearch(value)} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4  table-responsive">
                        <ViewTable deleteRow={(id) => this.deleteArtist(id)}
                            orderBy={() =>
                                this.setState({ type: !this.state.type }, this.getArtists)}
                            save={(artist) => this.saveArtist(artist)}
                            theads={theads} rows={artists} attributes={attributes} />
                    </div>
                </div>
            </>
        )
    }
}

export default ViewArtists
