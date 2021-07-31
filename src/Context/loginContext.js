import React from 'react'

const loginContext=React.createContext();
const LoginProvider=loginContext.Provider
const LoginConsumer=loginContext.Consumer

export {LoginConsumer,LoginProvider}
export {loginContext}