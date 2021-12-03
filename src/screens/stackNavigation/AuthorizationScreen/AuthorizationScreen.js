import React from "react"
import { AuthorizationHeader } from "../../../components/AuthorizationHeader/AuthorizationHeader"
import { AuthorizationForm } from "../../../components/AuthorizationForm"

export const AuthorizationScreen = () => {
  return (
    <AuthorizationHeader>
      <AuthorizationForm />
    </AuthorizationHeader>
  )
}
