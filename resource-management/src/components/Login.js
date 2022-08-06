import React from 'react'
import { Image, AddItemDiv, AddItemSubDiv, AddItemImageDiv, ItemFormDiv, InputBox, LabelBox, AddFormTitle, FORM, Button } from './StyledComponents'
import { loginAction, } from '../redux/slicer'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function Login() {
    const dispatch = useDispatch()
    const { pass, userName, demoUserName, demoPass } = useSelector(({ adminReducer }) => adminReducer)


    const storeInput = (e) => {
        dispatch(loginAction({ [e.target.name]: e.target.value.toLowerCase() }))
    }

    const addNewItem = (e) => {
        e.preventDefault()
        if (pass === '' || userName === '') {
            toast.error("All fields are required ", {
                position: toast.POSITION.BOTTOM_CENTER
            })
        } else if (userName !== demoUserName) {
            toast.error("Enter Valid User Name ", {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        else if (pass !== demoPass) {
            toast.error("Enter Valid Password ", {
                position: toast.POSITION.BOTTOM_CENTER
            })
        } else {
            toast.success("Login Successful.", {
                position: toast.POSITION.BOTTOM_CENTER
            })
            dispatch(loginAction({
                loggedIn: true, userName: "",
                pass: ""
            }))
        }
    }
    return (
        <>
            <AddItemDiv>
                <AddItemSubDiv login>
                    <ItemFormDiv>
                        <AddFormTitle>
                            Login
                        </AddFormTitle>
                        <FORM onSubmit={addNewItem}>
                            <LabelBox htmlFor='item-name'>User Name</LabelBox>
                            <InputBox id='item-name' value={userName} name='userName' onChange={storeInput} />

                            <LabelBox htmlFor='link-name'>Password</LabelBox>
                            <InputBox id='link-name' value={pass} name='pass' type='password' onChange={storeInput} />
                            <Button create type='submit'>CREATE</Button>
                        </FORM>
                    </ItemFormDiv>
                </AddItemSubDiv>
                <AddItemImageDiv>
                    <Image src="https://www.sbicard.com/creditcards/resources/img/digi-col-login.png" login />
                </AddItemImageDiv>
            </AddItemDiv>
        </>
    )
}
