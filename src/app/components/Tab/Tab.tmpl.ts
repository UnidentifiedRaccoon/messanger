// ToDo add message status (sending|delivered|was read|error)
// language=hbs
const tabTmpl = () => `
    {{# Link onClick=onMoveToChat outerStyles=styles.tab-link }}
        <div class={{styles.tab}}>
            {{{ IconProfile outerStyles=styles.icon icon=data.avatar }}}
            <div class={{styles.caption}} >
                <h3 class={{styles.title}}>{{data.title}}</h3>
                {{#if data.lastMessage}}
                    <span class={{styles.last-message}}>
                        <span class={{styles.who}}>{{who}}:</span> {{data.lastMessage.content}}</span>
                {{/if}}
            </div>
            <div class={{ styles.meta }}>
                {{#if data.lastMessage}}
                    <time class={{styles.time}} datetime={{data.lastMessage.time.datetime}}>
                        {{data.lastMessage.time.formatted}}
                    </time>
                    {{#if data.unreadCount}}
                      <span class={{styles.unread-count}}>
                        <span>
                            {{data.unreadCount}}
                        </span>
                      </span>
                    {{/if}}
                {{/if}}
            </div>
        </div>
    {{/Link}}
  `;

export default tabTmpl;
