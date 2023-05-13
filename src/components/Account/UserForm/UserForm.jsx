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
  StyledVectorPng,
  StyledBtn,
  StyledErrorMessage,
  StyledIconError,
  StyledIconChecked,
} from './UserForm.styled';

const validationSchema = Yup.object({
  name: Yup.string()
  .max(15, 'Length must be less then 15')
  .required('Your name is required'),
  birthday: Yup.date(),
  email: Yup.string().email('Invalid e-mail').required('Your e-mail is required'),
  skype: Yup.string().max(16),
});

const UserForm = () => {

  const { userInfo } = useSelector(selectUser);

  const [userImgUrl, setUserImgUrl] = useState(null);

  const [newBirthday, setNewBirthday] = useState(null);

  const [isUpdateForm, setIsUpdateForm] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  
  const dispatch = useDispatch();

  const [updatedData, setUpdatedData] = useState({});


  const handleDatePickerClose = () => {
    setIsOpen(false);
  };
  
  // useEffect(() => {
  //   if (isUpdateForm) {
  //     dispatch(getUserInfoThunk());
  //     setIsUpdateForm(null);
  //   }
  // }, [dispatch, isUpdateForm]);

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


        onSubmit={async (values,) => {
          
          

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
          setUpdatedData(values);

        }}
        validationSchema={validationSchema}
      >
        {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => (
          <StyledForm autoComplete="off" onSubmit={handleSubmit}>
          <StyledContainerImg>
                  {userImgUrl ? (
                    <StyledImgAvatar src={URL.createObjectURL(userImgUrl)} alt="avatar" />
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
                  ></StyledInput>
                  <StyledErrorMessage name="name" component="div"/>
                  {/* {(errors.name && touched.name) && <StyledIconError  color='red'/>}  */}
                  {(touched.name && !errors.name) && <StyledIconChecked color='green'/>}
                </div>

                
              </StyledLabelInput>

              <StyledLabelInput htmlFor="phone">
                <p>Phone</p>
                <StyledInput
                  type="tel"
                  name="phone"
                  id="phone"
                  value={values.phone ? values.phone : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+380"
                ></StyledInput>
                <ErrorMessage name="phone" />
              </StyledLabelInput>

              <StyledLabelInput htmlFor="birthday">
                <p>Birthday</p>
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
                  dateFormat="dd/MM/yyyy"
              open={isOpen}
              onClickOutside={() => setIsOpen(false)}
              onFocus={() => setIsOpen(true)}
                />

                <StyledVectorPng>
                  <use href={Icon + '#icon-chevron-right-new'}></use>
                </StyledVectorPng>

                <ErrorMessage name="birthday" />
              </StyledLabelInput>

              <StyledLabelInput htmlFor="skype">
                <p>Skype</p>
                <StyledInput
                  type="text"
                  name="skype"
                  id="skype"
                  placeholder="Skype"
                  value={values.skype ? values.skype : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></StyledInput>
                <ErrorMessage name="skype" />
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
                    ></StyledInput>
                    <StyledErrorMessage name="email" component="div"/>
                    {/* {(errors.email && touched.email) && <StyledIconError  color='red'/>} */}
                    {(touched.email && !errors.email) && <StyledIconChecked color='green'/>}
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