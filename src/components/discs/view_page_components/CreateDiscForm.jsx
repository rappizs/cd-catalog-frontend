import React, { Component } from 'react'
import Input from '../../common/Input'
import { createDisc } from '../../../services/DiscService';
import Select from '../../common/Select';

export class CreateDiscForm extends Component {

    state = {
        newDisc: {
            title: "",
            artist: "Choose...",
            album: "",
            year: "",
            style: "Choose...",
            song_count: ""
        },
        styles: [],
        artists: []
    }

    componentWillReceiveProps(newProps){
        const {artists, styles} = newProps;

        this.setState({
            artist: artists,
            styles: styles
        });
    }

    createNewCD() {
        const { newDisc } = this.state;
        const { getDisks, closeForm } = this.props;
        createDisc(newDisc).then(() => {
            getDisks();
            closeForm();
        }
        );
    }

    handleValueChange(attribute, value) {
        let { newDisc } = this.state;

        newDisc[attribute] = value;

        this.setState({ newDisc: newDisc });
    }

    render() {
        const { title, album,
            year, song_count } = this.state.newDisc;
        const { artists, styles } = this.props;

        return (
            <div className="container container-fluid border mb-2 bg-light">
                <div className="row">
                    <div className="col">
                        <Input name="title" label="Title" value={title}
                            onChange={(name, value) => this.handleValueChange(name, value)} />
                    </div>
                    <div className="col">
                        <Select name="artist" options={artists}
                            onChange={(name, value) => this.handleValueChange(name, value)}
                            attribute="name" label="Artist" />
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
                        <Select name="style" options={styles}
                            onChange={(name, value) => this.handleValueChange(name, value)}
                            attribute="name" label="Style" />
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

export default CreateDiscForm
