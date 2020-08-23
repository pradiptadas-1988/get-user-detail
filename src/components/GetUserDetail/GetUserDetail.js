import { connect } from "react-redux";

import { GetUserDetailContainer } from "./GetUserDetailContainer";
import { fetchUserDetail } from "./getUserDetail.actions";
import { getUserDetail, getIsShowModalValue } from "../../selectors/selector";

const mapStateToProps = (state) => ({
  userDetail: getUserDetail(state),
  isShowModal: getIsShowModalValue(state),
});

const GetUserDetail = connect(mapStateToProps, {
  fetchUserDetail
})(GetUserDetailContainer);
export default GetUserDetail;
