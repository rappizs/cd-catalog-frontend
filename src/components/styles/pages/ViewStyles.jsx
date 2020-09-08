import React, { Component } from 'react'
import ViewTable from '../../common/Viewtable/ViewTable';
import Input from '../../common/Input';
import { getStyles, deleteStyle, saveStyle, createStyle } from '../../../services/StyleService';

export class ViewStyles extends Component {

    state = {
        styles: [],
        searchValue: "",
        new_style: "",
        timeOut: null
    }

    componentDidMount() {
        this.getStyles();
    }

    handleSearch(searchValue) {
        const state = this.state;

        if (state.timeOut) {
            clearTimeout(state.timeOut);
        }

        state.timeOut = setTimeout(() => this.getStyles(), 500);
        state.searchValue = searchValue;

        this.setState(state);
    }

    getStyles() {
        const { searchValue } = this.state;

        getStyles(searchValue)
            .then(resp => resp.json())
            .then(resp => this.setState({ styles: resp }));
    }

    deleteStyle(id) {
        deleteStyle(id)
            .then(() => this.getStyles());
    }

    saveStyle(style) {
        saveStyle(style.id, style)
            .then(() => this.getStyles());
    }

    createStyle() {
        const { new_style } = this.state;
        const data = {
            name: new_style
        };

        createStyle(data)
            .then(() => {
                this.getStyles();
                this.setState({ new_style: "" });
            }
            );
    }

    render() {
        const theads = ["Name"];
        const attributes = ["name"];
        const { styles, new_style, searchValue } = this.state;

        return (
            <>
                <div className="d-flex justify-content-center align-items-end">
                    <div className="p-2">
                        <Input name="new" label="New style" value={new_style}
                            palecholder="New style's name..."
                            onChange={(name, value) => this.setState({ new_style: value })} />
                    </div>
                    <div className="p-2 form-group">
                        <button className="btn btn-primary" onClick={() => this.createStyle()}>
                            Save
                        </button>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-end">
                    <div className="col-md-6 col-lg-4">
                        <hr />
                        <Input name="search" value={searchValue}
                            palecholder="Search...."
                            onChange={(name, value) => this.handleSearch(value)} />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="col-md-6 col-lg-4  table-responsive">
                        <ViewTable deleteRow={(id) => this.deleteStyle(id)}
                            save={(style) => this.saveStyle(style)}
                            theads={theads} rows={styles} attributes={attributes} />
                    </div>
                </div>
            </>
        )
    }
}

export default ViewStyles
