
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import SignupEmail from './pages/SignupEmail';
import SignupPassword from './pages/SignupPassword';
import SignupDate from './pages/SignupDate';
import SignupName from './pages/SignupName';
import SignupLocation from './pages/SignupLocation';
import SignupGender from './pages/SignupGender';
import SignupBody from './pages/SignupBody';
import SignupGoal from './pages/SignupGoal';
import SignupExperience from './pages/SignupExperience';
import SignupDays from './pages/SignupDays';
import SignupVerifyEmail from './pages/SignupVerifyEmail';
import LoginEmail from './pages/LoginEmail';
import LoginPassword from './pages/LoginPassword';
import LoginForgot from './pages/LoginForgot';
import LoginForgotSuccess from './pages/LoginForgotSuccess';
import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import ActivityEmpty from './pages/ActivityEmpty';
import ExploreLayout from './components/ExploreLayout';
import ExploreForYou from './pages/explore/ExploreForYou';
import ExploreWorkouts from './pages/explore/ExploreWorkouts';
import ExploreCoaches from './pages/explore/ExploreCoaches';
import SearchScreen from './pages/SearchScreen';
import FilterScreen from './pages/FilterScreen';
import SortScreen from './pages/SortScreen';
import CustomMain from './pages/custom/CustomMain';
import CustomBuilder from './pages/custom/CustomBuilder';
import CustomSettings from './pages/custom/CustomSettings';
import MovementsList from './pages/custom/MovementsList';
import MovementDetail from './pages/custom/MovementDetail';
import CustomList from './pages/custom/CustomList';
import Settings from './pages/Settings';
import QRScanner from './pages/QRScanner';
import AccountDetail from './pages/AccountDetail';
import Profile from './pages/Profile';
import PushNotifications from './pages/PushNotifications';
import DeleteAccount from './pages/DeleteAccount';
import NotificationsScreen from './pages/NotificationsScreen';
import ConnectionScreen from './pages/ConnectionScreen';
import WelcomeStep1 from './pages/welcome/WelcomeStep1';
import WelcomeStep2 from './pages/welcome/WelcomeStep2';
import WelcomeStep3 from './pages/welcome/WelcomeStep3';
import WelcomeStep4 from './pages/welcome/WelcomeStep4';
import WelcomeStep5 from './pages/welcome/WelcomeStep5';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/welcome" element={<Navigate to="/welcome/1" replace />} />
        <Route path="/welcome/1" element={<WelcomeStep1 />} />
        <Route path="/welcome/2" element={<WelcomeStep2 />} />
        <Route path="/welcome/3" element={<WelcomeStep3 />} />
        <Route path="/welcome/4" element={<WelcomeStep4 />} />
        <Route path="/welcome/5" element={<WelcomeStep5 />} />
        <Route path="/signup" element={<SignupEmail />} />
        <Route path="/signup/password" element={<SignupPassword />} />
        <Route path="/signup/date" element={<SignupDate />} />
        <Route path="/signup/name" element={<SignupName />} />
        <Route path="/signup/location" element={<SignupLocation />} />
        <Route path="/signup/gender" element={<SignupGender />} />
        <Route path="/signup/body" element={<SignupBody />} />
        <Route path="/signup/goal" element={<SignupGoal />} />
        <Route path="/signup/experience" element={<SignupExperience />} />
        <Route path="/signup/days" element={<SignupDays />} />
        <Route path="/signup/verify-email" element={<SignupVerifyEmail />} />
        <Route path="/login/email" element={<LoginEmail />} />
        <Route path="/login/password" element={<LoginPassword />} />
        <Route path="/login/forgot" element={<LoginForgot />} />
        <Route path="/login/forgot-success" element={<LoginForgotSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/activity/empty" element={<ActivityEmpty />} />

        {/* Helper route to redirect /explore to /explore/foryou */}
        <Route path="/explore" element={<ExploreLayout />}>
          <Route index element={<Navigate to="foryou" replace />} />
          <Route path="foryou" element={<ExploreForYou />} />
          <Route path="workouts" element={<ExploreWorkouts />} />
          <Route path="coaches" element={<ExploreCoaches />} />
        </Route>

        {/* Feature Screens */}
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/filter" element={<FilterScreen />} />
        <Route path="/sort" element={<SortScreen />} />

        {/* Custom Workout Flow */}
        <Route path="/custom" element={<CustomMain />} />
        <Route path="/custom/builder" element={<CustomBuilder />} />
        <Route path="/custom/settings" element={<CustomSettings />} />
        <Route path="/custom/movements" element={<MovementsList />} />
        <Route path="/custom/movements/detail" element={<MovementDetail />} />
        <Route path="/custom/list" element={<CustomList />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/qr" element={<QRScanner />} />
        <Route path="/settings/account" element={<AccountDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings/notifications" element={<PushNotifications />} />
        <Route path="/settings/account/delete" element={<DeleteAccount />} />
        <Route path="/notifications" element={<NotificationsScreen />} />
        <Route path="/connect" element={<ConnectionScreen />} />
      </Routes>
    </Router>
  )
}

export default App
