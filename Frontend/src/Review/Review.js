import axios from "axios"
import React, {
  Component
} from "react"
import "./Review.css"

class Review extends Component {


  state = {
    name: '',
    komen: ''
  }

  InputEvent = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  formSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('https://server-nesaoktavia.herokuapp.com/api/review', this.state);
    if (res.data.status === 200) {
      console.log(res.data.message)
    }

  }

  render() {
    return (

      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>Komentar Project</h1>
          </div>

          <div className='content d_flex'>
            <div className='right box_shodow'>
              <form onSubmit={this.formSubmit} method="post">
                <div className='f_flex'>
                  <div className='input row'>
                    <span>Nama Project</span>
                    <input type='text' name='name' value={this.state.nama} onChange={this.InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>Komentar </span>
                  <textarea cols='30' rows='10' name='komen' value={this.state.komen} onChange={this.InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  Kirim <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default Review