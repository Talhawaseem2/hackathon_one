"use client"
import ContextWrapper from "@/Global/Context"
import SignupFormComp from "@/components/views/Signup"

const SingupForm = () => {
  return (
    <ContextWrapper>
        <SignupFormComp />
    </ContextWrapper>
  )
}

export default SingupForm