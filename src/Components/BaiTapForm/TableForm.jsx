import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSinhVien } from "../../redux/slice/formSlice";

const TableForm = () => {
  const {arrForm} = useSelector((state)=> state.formSlice)
  console.log(arrForm)
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="table-responsive">
      <table className="table">
        <thead>
          <tr className="bg-dark text-white">
            <th>Mã Sv</th>
            <th>Họ Tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrForm.map((item, index) => {
            console.log(item)
            const {email, hoTen, maSv, soDt} = item
            return  <tr className key={index}>
            <td>{maSv}</td>
            <td>{hoTen}</td>
            <td>{soDt}</td>
            <td>{email}</td>
            <td>
              <button onClick={()=>{
                // console.log(123)
                const action = deleteSinhVien(maSv)
                dispatch(action)
              }} className="btn btn-warning me-3">Xóa</button>
              <button className="btn btn-primary">Sửa</button>
            </td>
          </tr>
          })}
         
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TableForm;
