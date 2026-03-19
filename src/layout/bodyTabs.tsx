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
                width: '90%',
                marginBottom: '20px',
            }}
        >
            <TabPanel
                tabs={[
                    { content: <RulesTab />, label: 'Rules' },
                    { content: <DecklistTab />, label: 'Decklist' },
                    { content: <ChangelogTab />, label: 'Changelog' },
                    { content: <AboutTab />, label: 'About' },
                ]}
            />
        </div>
    );
};
