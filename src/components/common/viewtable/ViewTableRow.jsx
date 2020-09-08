import React, { Component } from 'react'
import Input from '../Input';
import Select from '../Select';

export class ViewTableRow extends Component {

    state = {
        edit: false,
        row: {}
    }

    componentDidMount() {
        const { row } = this.props;
        this.setState({ row: row });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.row !== prevState.row) {
            return ({ row: nextProps.row })
        }
        return null
    }

    renderEditButton() {
        const { edit, row } = this.state;

        if (edit) {
            return <button className="btn btn-primary form-group"
                onClick={() => {
                    this.props.save(row);
                    this.setState({ edit: false });
                }
                }>
                Save
                </button>
        }
        else {
            return <button className="btn btn-primary form-group"
                onClick={() => this.setState({ edit: !edit })}>
                Edit
            </button>
        }
    }

    handleInputChange(name, value) {
        const { row } = this.state;

        row[name] = value;
        this.setState({ row: row });
    }

    getType(a) {
        const numberTypes = ["year", "song_count"];
        const { row } = this.state;
        const { artists, styles } = this.props;

        if (a === "artist")
            return <Select name="artist" options={artists}
                onChange={(name, value) => this.handleInputChange(name, value)}
                attribute="name" />

        if (a === "style")
            return <Select name="style" options={styles}
                onChange={(name, value) => this.handleInputChange(name, value)}
                attribute="name" />

        if (numberTypes.includes(a)) {
            return <Input name={a} value={row[a]} type="number"
                onChange={(name, value) => this.handleInputChange(name, value)} />
        }
        else if (a !== "new_id") {
            return <Input name={a} value={row[a]}
                onChange={(name, value) => this.handleInputChange(name, value)} />
        }
    }

    render() {
        const { attributes, deleteRow } = this.props;
        const { row } = this.state;
        const { edit } = this.state;
        return (
            <tr className="align-items-end">
                {attributes.map((a, index) => (
                    <td key={index}>
                        {edit ? this.getType(a) : row[a]}
                    </td>
                ))}
                <td>
                    {this.renderEditButton()}
                </td>
                <td>
                    <button className="btn btn-danger"
                        onClick={() => deleteRow(row.id)}>
                        Delete
                   </button>
                </td>
            </tr>
        )
    }
}

export default ViewTableRow
