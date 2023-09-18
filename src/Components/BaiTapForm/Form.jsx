import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import { setArrForm } from "../../redux/slice/formSlice";
const Form = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      maSv: "",
      hoTen: "",
      soDt: "",
      email: "",
    },
    onSubmit:(value)=>{
        console.log(value)
        const action = setArrForm(value)
        dispatch(action)
    },
    validationSchema: Yup.object().shape({
        maSv: Yup.string().required('Vui lòng không bỏ trống').matches(/^\d{4,6}$/,'Mã ID có độ dài từ 4-6 chữ số'),
        hoTen: Yup.string().required('Vui lòng không bỏ trống'),
        soDt: Yup.string().required('Vui lòng không bỏ trống').matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/,'Vui lòng nhập đúng định dạng số điện thoại'),
        email: Yup.string().required('Vui lòng không bỏ trống').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Vui lòng nhập đúng định dạng Email'),
    })

  });
  return (
    <>
      <div className="bg-dark text-white py-3">
        <h3>Thông Tin Sinh Viên</h3>
      </div>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor className="form-label">
                  Mã Sv
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="maSv"
                  id
                  aria-describedby="helpId"
                  placeholder
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.maSv}
                />
                {formik.touched.maSv && formik.errors.maSv && <p className="text-danger">{formik.errors.maSv}</p>}
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor className="form-label">
                  Họ Tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="hoTen"
                  id
                  aria-describedby="helpId"
                  placeholder
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.hoTen}
                />
                {formik.touched.hoTen && formik.errors.hoTen && <p className="text-danger">{formik.errors.hoTen}</p>}
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor className="form-label">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="soDt"
                  id
                  aria-describedby="helpId"
                  placeholder
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.soDt}
                />
                {formik.touched.soDt && formik.errors.soDt && <p className="text-danger">{formik.errors.soDt}</p>}
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id
                  aria-describedby="helpId"
                  placeholder
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && <p className="text-danger">{formik.errors.email}</p>}
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <button type="submit" className="btn btn-success">Thêm sinh viên</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
