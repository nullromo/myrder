import { AboutTab } from '../tabs/aboutTab';
import { ChangelogTab } from '../tabs/changelogTab';
import { DecklistTab } from '../tabs/decklistTab';
import { RulesTab } from '../tabs/rulesTab';
import { TabPanel } from '../tabs/tabPanel';

export const BodyTabs = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                marginBottom: '20px',
                width: '90%',
            }}
        >
            <TabPanel
                tabs={[
                    { content: <RulesTab />, label: 'Overview and Rules' },
                    { content: <DecklistTab />, label: 'Decklist and Primer' },
                    { content: <ChangelogTab />, label: 'Changelog' },
                    { content: <AboutTab />, label: 'More Information' },
                ]}
            />
        </div>
    );
};
