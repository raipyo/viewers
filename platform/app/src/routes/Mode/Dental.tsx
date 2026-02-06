import React from 'react';
import { ViewportGridProvider, ViewportGrid } from '@ohif/ui-next';
import { CineProvider, NotificationProvider } from '@ohif/ui-next';
import { useAppConfig } from '@state';
import DentalHeader from './DentalHeader';
import HangingProtocol2x2 from './HangingProtocol2x2';
import DentalMeasurements from './DentalMeasurements';

const Dental = ({ servicesManager, extensionManager }) => {
  const [appConfig] = useAppConfig();
  const { viewportGridService, cineService, uiNotificationService } = servicesManager.services;

  return (
    <CineProvider service={cineService}>
      <NotificationProvider service={uiNotificationService}>
        <ViewportGridProvider service={viewportGridService}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              backgroundColor: '#fdfdfd',
            }}
          >
            <DentalHeader />

            <HangingProtocol2x2 />

            <DentalMeasurements servicesManager={servicesManager} />
          </div>
        </ViewportGridProvider>
      </NotificationProvider>
    </CineProvider>
  );
};

export default Dental;
