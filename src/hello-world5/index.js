import {createCustomElement} from '@servicenow/ui-core';
import snabbdom, { Fragment } from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-tabs';
import '@servicenow/now-content-tree';
import '@servicenow/now-card';
import styles from './styles.scss';

// TODO:start abstract mobile-core
import { Capacitor, Plugins } from '@capacitor/core';

const { Toast } = Plugins;
// TODO:end abstract mobile-core


const show = async (tabName) => {
	await Toast.show({
	  text: `${tabName} loaded!`
	});
}

const view = (state, {updateState}) => {
	const { selectedTab } = state;
	const cards = [
		{
			size: 'lg',
			interaction: 'none',
			sidebar: {"color":"critical","variant":"primary"},
			header: {
				tagline: {"label":"Process","icon":"tree-view-short-outline"},
				heading: {"label":"Submit expense for approval","size":"sm","lines":2}
			},
			footer: {
				label: "Card footer",
				split: "equal"
			}
		},
		{
			size: 'lg',
			interaction: 'none',
			sidebar: {"color":"high","variant":"primary"},
			header: {
				tagline: {"label":"Process","icon":"tree-view-short-outline"},
				heading: {"label":"Submit expense for approval","size":"sm","lines":2}
			},
			footer: {
				label: "Card footer",
				split: "equal"
			}
		},
		{
			size: 'lg',
			interaction: 'none',
			sidebar: {"color":"warning","variant":"primary"},
			header: {
				tagline: {"label":"Process","icon":"tree-view-short-outline"},
				heading: {"label":"Submit expense for approval","size":"sm","lines":2}
			},
			footer: {
				label: "Card footer",
				split: "equal"
			}
		},
		{
			size: 'lg',
			interaction: 'none',
			sidebar: {"color":"positive","variant":"primary"},
			header: {
				tagline: {"label":"Process","icon":"tree-view-short-outline"},
				heading: {"label":"Submit expense for approval","size":"sm","lines":2}
			},
			footer: {
				label: "Card footer",
				split: "equal"
			}
		}
	];

	return (
		<div className={Capacitor.isNative ? 'page': ''}>
			<now-tabs items={[
				{"id":"details","label":"Details","icon":"bell-outline","count":5,"presence":"available"},
				{"id":"tasks","label":"Task SLAs","icon":"document-outline","count":7,"presence":"away"},
			]} 
			selectedItem={selectedTab}
			></now-tabs>
			
			{
				selectedTab === 'details' ? 
					<now-content-tree items={[{"id":"us","label":"United States","children":[{"id":"us-az","label":"Arizona","childrenAvailable":10},{"id":"us-ca","label":"California","children":[{"id":"us-ca-0","label":"Adelanto"},{"id":"us-ca-1","label":"Alameda"}]},{"id":"us-or","label":"Oregon","children":[{"id":"us-or-0","label":"Albany"},{"id":"us-or-1","label":"Ashland"}]}]}]} selectedItems={[]} expandedItems={[["us"],["us","us-ca"]]} loadingItems={[]} select="single" searchTerm=""></now-content-tree>
					: null
			}

			{
				selectedTab === 'tasks' ?
					cards.map(c => {
						return (
							<now-card size={c.size} interaction={c.interaction} sidebar={c.sidebar}>
								<now-card-header tagline={c.header.tagline} heading={c.header.heading}></now-card-header>
								<now-card-footer label={c.footer.label} split={c.footer.split}></now-card-footer>
							</now-card>
						)
					})
					: null
			}
		</div>
	);
};

createCustomElement('hello-world5', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
		selectedTab: 'details'
	},
	actionHandlers: {
		['NOW_TABS#SELECTED_ITEM_SET']: ({action: {payload: {value}}, updateState}) => {
			updateState({
				selectedTab: value
			});
			show(value);
		}
	}
});
