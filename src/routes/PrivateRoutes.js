import React, {Suspense} from 'react';

import {Route, Switch} from "react-router-dom";
import routes from "../constants/routes";

const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const PrivateRoutes = () => {
    return (
        <div>
            <Suspense fallback={<div>LOADING...</div>}>
                <Switch>
                    <Route exact path={routes.HOME} component={Dashboard}/>
                </Switch>
            </Suspense>
        </div>
    );
};

export default PrivateRoutes;