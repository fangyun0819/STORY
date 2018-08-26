import React, {ReactDOM} from 'react';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: [],imagePreviewUrl: []};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();
    let files = Array.from(e.target.files)

    files.forEach( (file) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        let {imagePreviewUrl} = this.state;
        let _file = this.state.file;
        _file.push(file)
        imagePreviewUrl.push(reader.result)
        this.setState({
          file: _file,
          imagePreviewUrl: imagePreviewUrl
        });
      }
  
      reader.readAsDataURL(file)
  
    })
  }

  render() {
    const { classes } = this.props;
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl.length !== 0) {
      $imagePreview = <ImagePicker 
      multiple
      images={this.state.imagePreviewUrl.map((image, i) => ({src: image, value: i}))}
    />
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={(e)=>this._handleImageChange(e)} 
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            選擇照片
          </Button>
        </label>
            <Button
              type="submit" 
              variant="contained"
              onClick={(e)=>this._handleSubmit(e)}>
              確認上傳
            </Button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ImageUpload);
