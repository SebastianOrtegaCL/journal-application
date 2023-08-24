import {Navigate, Route, Routes} from "react-router-dom";
import {useCheckAuth} from "../hooks/index.js";
import {JournalRoutes} from "../journal/routes/JournalRoutes.jsx";
import {AuthRoutes} from "../auth/routes/AuthRoutes.jsx";

export const AppRouter = () => {

    const {status} = useCheckAuth();

    return  (
        <Routes>
            {
                (status === 'authenticated')
                    ? <Route path='/*' element={ <JournalRoutes /> }/>
                    : <Route path='/auth/*' element={ <AuthRoutes />} />
            }

            <Route path='/*' element={ <Navigate to='/auth/login' />} />
        </Routes>
    )
}