import React, { PureComponent } from "react";

import APP_CONSTANT from "../../constant";

class GetUserDetailContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      isValidValue: true,
    };
  }
  _valueValidator = (e) => {
    const letterNumber = /^[0-9]+$/;
    let key = e.target.value.trim();
    if (key.length <= 10) {
      this.setState({ userID: key }, () => {});
      key.match(letterNumber)
        ? this.setState({ isValidValue: false }, () => {})
        : this.setState({ isValidValue: true });
    }
  };

  _checkDataFilled = () => {
    return this.state.userID.trim() !== "" ? true : false;
  };

  _getUserDetail = (e) => {
    e.preventDefault();
    let isDataFilled = this._checkDataFilled();
    isDataFilled ? this._fetchDetail() : alert(APP_CONSTANT.DATA_WARNING);
  };

  _fetchDetail = () => {
    const { fetchUserDetail } = this.props;
    fetchUserDetail(this.state.userID);
  };

  render() {
    return (
      <>
        <div className="row border">
          <form id="new_data_add" onSubmit={this._getUserDetail}>
            <div className="padding0">
              <div className="col-sm-12 col-md-12 col-lg-12 padding0 margin5">
                <div className="col-sm-12 col-md-12 col-lg-12 padding0 margin5">
                  <input
                    type="text"
                    placeholder="User ID"
                    value={this.state.userID}
                    onChange={this._valueValidator}
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 padding0 margin5">
                  <button
                    className="btn btn-primary removeProd"
                    type="submit"
                    disabled={this.state.isValidValue}
                  >
                    {APP_CONSTANT.GET_DETAIL}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export { GetUserDetailContainer };
