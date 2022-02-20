import React, {Suspense} from 'react';

import {Route, Switch} from "react-router-dom";
import routes from "../constants/routes";

const AuthPage = React.lazy(() => import('../pages/Auth'));

const PublicRoutes = () => {
    return (
        <div>
            <Suspense fallback={<div>LOADING...</div>}>
                <Switch>
                    <Route exact path={routes.SIGN_IN} component={AuthPage}/>
                </Switch>
            </Suspense>
        </div>
    );
};

export default PublicRoutes;