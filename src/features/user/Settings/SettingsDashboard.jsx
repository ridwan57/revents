import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import SettingsNav from '../../nav/NavBar/Menus/SettingsNav'
import AboutPage from './AboutPage'
import BasicPage from './BasicPage'
import PhotosPage from './PhotosPage'
import AccountPage from './AccountPage'

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route path='/settings/basic' component={BasicPage} />
          <Route path='/settings/about' component={AboutPage} />
          <Route path='/settings/photos' component={PhotosPage} />
          <Route path='/settings/account' component={AccountPage} />
        </Switch>

        {/* <h1>Settings</h1> */}
      </Grid.Column>

      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  )
}

export default SettingsDashboard
