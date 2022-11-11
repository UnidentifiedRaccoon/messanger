// language=hbs
const overlayTmpl = () => `
    <div class="overlay-outer {{styles.overlay}}  {{outerStyles}}">
        <div class="overlay-inner {{styles.center}}">
            <div data-slot="1"></div>
        </div>
    </div>
`;

export default overlayTmpl;
