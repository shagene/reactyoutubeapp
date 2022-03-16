import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

class SearchBar extends React.Component {
    state = {
        term: "",
    };

    onInputChange = (event) => {
    this.setState({term: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <>
                <Box
                    component="form"
                    sx={{
                        mb: 1.5
                    }}
                    onSubmit={this.onFormSubmit}
                >
                    <FormControl style={{width: "100%"}} >
                        <TextField
                            // onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
                            id="searchVideo"
                            label="Video Image"
                            variant="outlined"
                            value={this.state.term}
                            onChange={e => this.setState({term: e.target.value})}
                        />
                    </FormControl>
                </Box>
            </>
        );
    }
}

export default SearchBar;
