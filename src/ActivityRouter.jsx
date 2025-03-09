import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const CallHistory = lazy(() => import("@pages/CallHistory"));
const Detail = lazy(() => import("@pages/Detail"));
const HistoryInfo = lazy(() => import("@pages/History"));
const NotFound = lazy(() => import("@pages/NotFound"));

function ActivityRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<CallHistory />} />
          <Route path="/activity-feed" element={<CallHistory />} />
          <Route path="/activity-detail/:id" element={<Detail />} />
          <Route path="/activity-history/:id" element={<HistoryInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default ActivityRouter;
