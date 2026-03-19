import { BodyTabs } from './bodyTabs';
import { PictureTitle } from './pictureTitle';
import { Tagline } from './tagline';

export const Body = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <PictureTitle />
            <div
                style={{
                    alignItems: 'center',
                    background: 'black',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    marginTop: '70px',
                }}
            >
                <Tagline />
                <BodyTabs />
            </div>
        </div>
    );
};
