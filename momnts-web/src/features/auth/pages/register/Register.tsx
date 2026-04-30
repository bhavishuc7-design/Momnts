import { Form, Link } from "react-router"
import { Field, FieldGroup, FieldLabel, FieldSet } from "../../../../components/ui/field"
import { Input } from "../../../../components/ui/input"
import { Button } from "../../../../components/ui/button"

const Register = () => {
    return(
        <>
        <div className="register-main-view flex w-full h-screen">
            <div className="register-left flex flex-col items-center justify-center md:w-1/2 w-full">
                <Form onSubmit={(e) => {
                    e.preventDefault()
                }} 
                className="w-full flex items-center justify-center"
                >
                    <FieldGroup className="w-2/3 md:w-1/2">
                    <div className="logo flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold font-logo select-none">Momnts</span>
                    </div>
                    <div className="">
                        <h1 className="text-2xl font-bold select-none">Hello!</h1>
                    </div>
                        <FieldSet>
                            <Field>
                                <FieldLabel htmlFor="username">Username</FieldLabel>
                                <Input required id="username" type="text" className="w-full" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input required id="email" type="email" className="w-full" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input required id="password" type="password" className="w-full" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                                <Input required id="confirmPassword" type="password" className="w-full" />
                            </Field>
                            <Field>
                                <Button type="submit" className="w-full cursor-pointer">Get Started</Button>
                            </Field>
                        </FieldSet>
                        <span className="select-none">Already have an account? <Link to="/login" className="underline">Login</Link></span>
                    </FieldGroup>
                </Form>
            </div>
            <div className="register-right md:w-1/2 hidden md:block">
                <div className="register-right-content w-full h-full p-2">
                    <img src="/register_image.jpg" alt="register-image" className="w-full h-full object-cover rounded-xl" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Register