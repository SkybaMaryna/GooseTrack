import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { selectUser } from 'redux/Auth/authSelectors';
import { getUserInfoThunk, updateUserThunk } from 'redux/Auth/authOperations';
import plus from './plus.png';
import Icon from './icon.svg';

import {
  StyledWrapper,
  StyledUser,
  StyledForm,
  StyledBlockInput,
  StyledLabelInput,
  StyledInput,
  StyledDatePicker,
  StyledInputFile,
  StyledImgBtn,
  StyledLabelImg,
  StyledContainerImg,
  StyledImgAvatar,
  StyledSvgAvatar,
  StyledBtn,
  StyledErrorMessage,
  StyledIconChecked,
  StyledIconError,
  ChevronDown,
  DatePickerWrap,
} from './UserForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(15, 'Length must be less then 15')
    .required('Your name is required'),
  email: Yup.string()
    .email('Invalid e-mail')
    .required('Your e-mail is required'),
  birthday: Yup.date().nullable(),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Enter your phone number in format +380')
    .nullable(),
  skype: Yup.string().max(16, 'Length must be less then 16').nullable(),
});

const UserForm = () => {
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  const [userImgUrl, setUserImgUrl] = useState(null);
  const [newBirthday, setNewBirthday] = useState(null);
  const [isUpdateForm, setIsUpdateForm] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skype: '',
    birthday: '',
  });

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  useEffect(() => {
    if (isUpdateForm) {
      dispatch(getUserInfoThunk());
      setIsUpdateForm(null);
    }
  }, [dispatch, isUpdateForm]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleDatePickerClose = () => {
    setIsOpen(false);
  };

  return (
    <StyledWrapper>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: formData.name || userInfo?.name || '',
          email: formData.email || userInfo?.email || '',
          phone: formData.phone || userInfo?.phone || '',
          skype: formData.skype || userInfo?.skype || '',
          birthday:
            newBirthday || formData.birthday || userInfo?.birthday
              ? new Date(newBirthday || formData.birthday || userInfo?.birthday)
              : new Date(),
        }}
        onSubmit={async values => {
          const formData = new FormData();
          formData.append('name', values.name);
          formData.append('email', values.email);
          if (values.phone) {
            formData.append('phone', values.phone);
          }
          if (values.skype) {
            formData.append('skype', values.skype);
          }
          formData.append('birthday', values.birthday);
          if (userImgUrl) {
            formData.append('userImgUrl', userImgUrl);
          }
          await dispatch(updateUserThunk(formData));
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <StyledForm autoComplete="off" onSubmit={handleSubmit}>
            <StyledContainerImg>
              {userImgUrl ? (
                <StyledImgAvatar
                  src={URL.createObjectURL(userImgUrl)}
                  alt="avatar"
                />
              ) : userInfo?.userImgUrl ? (
                <StyledImgAvatar src={userInfo.userImgUrl} alt="avatar" />
              ) : (
                <StyledSvgAvatar>
                  <use href={Icon + '#icon-ph-user'}></use>
                </StyledSvgAvatar>
              )}
              <StyledLabelImg htmlFor="userImgUrl">
                <StyledImgBtn src={plus} alt="user" />
                <StyledInputFile
                  id="userImgUrl"
                  type="file"
                  onChange={event => setUserImgUrl(event.target.files[0])}
                  accept="image/*,.png,.jpg,.gif,.web"
                  name="userImgUrl"
                ></StyledInputFile>
              </StyledLabelImg>
            </StyledContainerImg>

            <h2>{userInfo?.name} </h2>
            <StyledUser>User</StyledUser>
            <StyledBlockInput>
              <StyledLabelInput htmlFor="name">
                <p>User Name</p>
                <div>
                  <StyledInput
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Name"
                  />
                  <StyledErrorMessage name="name" component="div" />
                  {errors.name && touched.name && (
                    <StyledIconError color="red" />
                  )}
                  {touched.name && !errors.name && (
                    <StyledIconChecked color="green" />
                  )}
                </div>
              </StyledLabelInput>

              <StyledLabelInput htmlFor="phone">
                <p>Phone</p>
                <div>
                  <StyledInput
                    type="tel"
                    name="phone"
                    id="phone"
                    value={values.phone ? values.phone : ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+380"
                  />
                  <ErrorMessage name="phone" />
                  {errors.phone && touched.phone && (
                    <StyledIconError color="red" />
                  )}
                  {touched.phone && !errors.phone && (
                    <StyledIconChecked color="green" />
                  )}
                </div>
              </StyledLabelInput>

              <StyledLabelInput htmlFor="birthday">
                <p>Birthday</p>
                <DatePickerWrap>
                  <StyledDatePicker
                    type="date"
                    name="birthday"
                    id="birthday"
                    input={true}
                    maxDate={new Date()}
                    selected={values.birthday}
                    onChange={data => {
                      setNewBirthday(data);
                      handleDatePickerClose();
                    }}
                    placeholder="Birthday"
                    dateFormat="yyyy/MM/dd"
                    open={isOpen}
                    onClickOutside={() => setIsOpen(false)}
                    onFocus={() => setIsOpen(true)}
                    showYearDropdown
                    scrollableYearDropdown
                  />
                  <ChevronDown size={30}/>
                  <StyledErrorMessage name="birthday" component="div" />
                  {errors.birthday && touched.birthday && (
                    <StyledIconError color="red" />
                  )}
                  {touched.birthday && !errors.birthday && (
                    <StyledIconChecked color="green" />
                  )}
                </DatePickerWrap>
              </StyledLabelInput>

              <StyledLabelInput htmlFor="skype">
                <p>Skype</p>
                <StyledInput
                  type="text"
                  name="skype"
                  id="skype"
                  placeholder="Add a skype number"
                  value={values.skype ? values.skype : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <StyledErrorMessage name="skype" component="div" />
                {errors.skype && touched.skype && (
                  <StyledIconError color="red" />
                )}
                {touched.skype && !errors.skype && (
                  <StyledIconChecked color="green" />
                )}
              </StyledLabelInput>

              <StyledLabelInput htmlFor="email">
                <p>Email</p>
                <div>
                  <StyledInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <StyledErrorMessage name="email" component="div" />
                  {touched.email && !errors.email && (
                    <StyledIconChecked color="green" />
                  )}
                </div>
              </StyledLabelInput>
            </StyledBlockInput>
            <StyledBtn type="submit">Save changes</StyledBtn>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default UserForm;
