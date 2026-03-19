import myrServitor from '../images/myr-servitor-art.jpg';
import { MyrderTitle } from './myrderTitle';

export const PictureTitle = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${myrServitor})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                boxShadow: 'inset 0px -12px 12px 8px',
                display: 'flex',
                height: '40vh',
                justifyContent: 'center',
            }}
        >
            <MyrderTitle />
        </div>
    );
};
