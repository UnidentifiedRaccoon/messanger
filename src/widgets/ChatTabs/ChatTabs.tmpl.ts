// language=hbs
const chatTabsTmpl = () => `
    <div class={{styles.tabs}}>
        {{#if data}}
            <ul class={{styles.tab-list}}>
                {{#each data}}
                    <li class={{styles.tab-item}} id="{{this.id}}">
                        {{{ Tab data=this }}}
                    </li>
                {{/each}}
            </ul>
        {{else}}
            {{{ ChatTabsEmpty text=staticData.emptyChatTabs }}}
        {{/if}}
    </div>
`;

export default chatTabsTmpl;
