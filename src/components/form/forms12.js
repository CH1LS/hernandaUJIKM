import React from "react"
import   "./from.css"

const Form = () => {
    return (
        <div className="App">
      <form>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Name</label>
          <input className="form-control" name="username"  />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">kontak wa</label>
          <input className="form-control" name="email"  />
        </div>
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">JUMLAH ORANG</label>
          <select className="form-select" name="occupation" >
            <option value="student">SENDIRI</option>
            <option value="employee">BERTIGA</option>
            <option value="other">BARLIMA</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">LOKASI</label>
          <div>
            <div>
              <input type="checkbox" name="languages" value="html"  />
              <label htmlFor="html">BORO BORO</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="css"  />
              <label htmlFor="css">KeyWest</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="javascript"  />
              <label htmlFor="javascript">Maldives2</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="javascript"  />
              <label htmlFor="javascript">Maldives3</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">EAT</label>
          <div>
            <div>
              <input type="checkbox" name="languages" value="html"  />
              <label htmlFor="html">ASIA</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="css"  />
              <label htmlFor="css">LOKAL</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="javascript"  />
              <label htmlFor="javascript">WESTERNFOOD</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
    )
}

export default Form