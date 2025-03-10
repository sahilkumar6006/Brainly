
const Signin = (req: Request, res: Response) => {
    const {username, password} = req.body;
    if(!username || !password){
        res.status(200, {
            message: 'provide the username and password'
        })
    }

}


const SignUp = (req: Request, res: Response) => {

}


export {
    Signin,
    SignUp
}