import { DISCORD_LINK } from '../discordLink';
import discordLogo from '../images/discord.webp';
import githubLogo from '../images/github.svg';
import myrderBack from '../images/myrder-back.webp';
import myrderFront from '../images/myrder-front.webp';
import venmoLogo from '../images/venmo.webp';
import type { LogoButtonProps } from '../layout/logoButton';
import { LogoButton } from '../layout/logoButton';
import { Title } from '../layout/title';
import { TabContent } from './tabContent';

const LogoLink = (props: LogoButtonProps & React.PropsWithChildren) => {
    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                marginBottom: '10px',
            }}
        >
            <div style={{ paddingRight: '10px' }}>
                <LogoButton
                    background={props.background}
                    href={props.href}
                    image={props.image}
                    title={props.title}
                />
            </div>
            {props.children}
        </div>
    );
};

export const AboutTab = () => {
    return (
        <TabContent>
            <Title title='Business Card' />
            <div style={{ paddingBottom: '20px', textAlign: 'center' }}>
                These business cards were handed out at MagicCon Vegas 2026.
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <img
                    src={myrderFront}
                    style={{ maxWidth: '600px', width: '45%' }}
                />
                <img
                    src={myrderBack}
                    style={{ maxWidth: '600px', width: '45%' }}
                />
            </div>
            <Title title='Links' />
            <LogoLink
                background='#5865f2'
                href={DISCORD_LINK}
                image={discordLogo}
                title='Discord'
            >
                <div>
                    Join our Discord{' '}
                    <span style={{ textDecoration: 'line-through' }}>
                        server
                    </span>{' '}
                    servitor
                </div>
            </LogoLink>
            <LogoLink
                href='https://github.com/nullromo/myrder'
                image={githubLogo}
                title='GitHub'
            >
                <div>
                    {'Check out the page, '}
                    <a href='https://github.com/nullromo/myrder/issues'>
                        open an issue
                    </a>
                    {', or '}
                    <a href='https://github.com/sponsors/nullromo'>sponsor</a>
                </div>
            </LogoLink>
            <LogoLink
                background='#0074d3'
                href='https://venmo.com/u/Kyle-Kovacs'
                image={venmoLogo}
                title='Venmo'
            >
                <div>Support on Venmo</div>
            </LogoLink>
            <em style={{ fontSize: '16pt', paddingTop: '20px' }}>
                Also check out{' '}
                <a href='https://deckstats.net/decks/102881/3247652-kyle-s-forgetful-fish'>
                    my Forgetful Fish list
                </a>
            </em>
            <Title title='Contact' />
            <div style={{ paddingBottom: '20px' }}>
                Get in touch via e-mail:{' '}
                <code
                    style={{
                        background: 'darkgray',
                        borderRadius: '4px',
                        color: 'black',
                        padding: '0 8px',
                    }}
                >
                    kylerobertkovacs -at- gmail -dot- com
                </code>
            </div>
            <Title title='Credits' />
            <div>
                The{' '}
                <a href='https://moxfield.com/decks/U10Q_zEz-0m2EQOEpdPR4Q'>
                    original Myrder decklist
                </a>{' '}
                was created by catdaddy360. The name of the format is derived
                from the fact that he pronounces myr like {'"mrr"'}. It is
                acceptable to pronounce Myrder like {'"meerder"'} or{' '}
                {'"murder"'} ;)
            </div>
            <Title title='Disclaimer' />
            <div style={{ color: 'darkgray' }}>
                This website contains unofficial fan content permitted under the{' '}
                <a href='https://company.wizards.com/en/legal/fancontentpolicy'>
                    Wizards of the Coast Fan Content Policy
                </a>
                {''}. Information presented on this website about Magic: The
                Gathering, including card images, fonts, and mana symbols, is
                copyright Wizards of the Coast, LLC. Myrder.com is not produced
                by or endorsed by Wizards of the Coast.
            </div>
        </TabContent>
    );
};
