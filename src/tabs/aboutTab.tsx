import { Title } from '../layout/title';
import { TabContent } from './tabContent';
import myrderFront from '../images/myrder-front.png';
import githubLogo from '../images/github.svg';
import venmoLogo from '../images/venmo.png';
import discordLogo from '../images/discord.png';
import myrderBack from '../images/myrder-back.png';

const LogoButton = (props: {
    readonly title: string;
    readonly image: string;
    readonly background?: string;
    readonly href: string;
}) => {
    return (
        <a
            href={props.href}
            style={{ color: 'inherit', textDecoration: 'none' }}
        >
            <div
                style={{
                    alignItems: 'center',
                    background: props.background ?? 'black',
                    border: props.background ? '2px solid black' : '',
                    borderRadius: '10px',
                    columnGap: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    padding: '4px 10px',
                    width: 'fit-content',
                }}
            >
                <div
                    style={{
                        alignItems: 'center',
                        background: 'white',
                        borderRadius: '10px',
                        display: 'flex',
                        height: '38px',
                    }}
                >
                    <img
                        src={props.image}
                        style={{
                            borderRadius: '10px',
                            padding: '2px',
                            width: '34px',
                        }}
                    />
                </div>
                {props.title}
            </div>
        </a>
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
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    marginBottom: '10px',
                }}
            >
                <div style={{ paddingRight: '10px' }}>
                    <LogoButton
                        background='#5865f2'
                        href='https://discord.gg/xukXaPA6UH'
                        image={discordLogo}
                        title='Discord'
                    />
                </div>
                <div>
                    Join our Discord{' '}
                    <span style={{ textDecoration: 'line-through' }}>
                        server
                    </span>{' '}
                    servitor
                </div>
            </div>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    marginBottom: '10px',
                }}
            >
                <div style={{ paddingRight: '10px' }}>
                    <LogoButton
                        href='https://github.com/nullromo/myrder'
                        image={githubLogo}
                        title='GitHub'
                    />
                </div>
                <div>
                    {'Check out the page, '}
                    <a href='https://github.com/nullromo/myrder/issues'>
                        open an issue
                    </a>
                    {', or '}
                    <a href='https://github.com/sponsors/nullromo'>sponsor</a>
                </div>
            </div>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    marginBottom: '10px',
                }}
            >
                <div style={{ paddingRight: '10px' }}>
                    <LogoButton
                        background='#0074d3'
                        href='https://venmo.com/u/Kyle-Kovacs'
                        image={venmoLogo}
                        title='Venmo'
                    />
                </div>
                <div>Support on Venmo</div>
            </div>
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
