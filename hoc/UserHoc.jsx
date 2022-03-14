import React from 'react'

const UserHoc = (WrapperContainer,arg1) => {
return(props) => (
    <>
    {arg1}
    <WrapperContainer {...props}/>
    </>
)
}

export default UserHoc