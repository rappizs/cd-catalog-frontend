import React, { Component } from 'react'
import Input from '../../common/Input'
import { createDisc } from '../../../services/discService';

export class CreateDiskForm extends Component {

    state = {
        newDisk: {
            title: "",
            artist_id: "",
            album: "",
            year: "",
            style_id: "",
            song_count: ""
        }
    }

    createNewCD() {
        const { newDisk } = this.state;
        const { getDisks, closeForm } = this.props;
        createDisc(newDisk).then(() => {
            getDisks();
            closeForm();
        }
        );
    }

    handleValueChange(attribute, value) {
        let { newDisk } = this.state;

        newDisk[attribute] = value;

        this.setState({ newDisk: newDisk });
    }

    render() {
        const { title, artist_id, album,
            year, style_id, song_count } = this.state.newDisk;
        return (
            <div className="container container-fluid border mb-2 bg-light">
                <div className="row">
                    <div className="col">
                        <Input name="title" label="Title" value={title}
                            onChange={(name, value) => this.handleValueChange(name, value)} />
                    </div>
                    <div className="col">
                        <Input name="artist_id" label="Artist" value={artist_id}
                            onChange={(name, value) => this.handleValueChange(name, value)} />
                    </div>
                    <div className="col">
                        <Input name="album" label="Album" value={album}
                            onChange={(name, value) => this.handleValueChange(name, value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Input name="year" label="Year" value={year}
                            onChange={(name, value) => this.handleValueChange(name, value)} />
                    </div>
                    <div className="col">
                        <Input name="style_id" label="Style" value={style_id}
                            onChange={(name, value) => this.handleValueChange(name, value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="song_count">Song count</label>
                        <input name="song_count" value={song_count}
                            type="number" className="form-control"
                            onChange={(e) => this.handleValueChange("song_count", e.target.value)} />
                    </div>
                </div>
                <div className="d-flex flex-row-reverse mb-2">
                    <button className="btn btn-primary" onClick={() => this.createNewCD()}>
                        Save
                    </button>
                </div>
            </div>
        )
    }
}

export default CreateDiskForm
