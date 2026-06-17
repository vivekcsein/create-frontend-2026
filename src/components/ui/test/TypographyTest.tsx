const TypographyTest = () => {
  const items = [
    { name: "H1", preview: <h1>Heading h1</h1> },
    { name: "H2", preview: <h2>Heading h2</h2> },
    { name: "H3", preview: <h3>Heading h3</h3> },
    { name: "H4", preview: <h4>Heading h4</h4> },
    { name: "H5", preview: <h5>Heading h5</h5> },
    { name: "H6", preview: <h6>Heading h6</h6> },

    { name: "Paragraph", preview: <p>Lorem ipsum dolor sit amet.</p> },

    { name: "Span", preview: <span>Span Text</span> },

    { name: "Div", preview: <div>Div Element</div> },

    {
      name: "List Item",
      preview: (
        <ul className="list-disc pl-5">
          <li>List Item</li>
        </ul>
      ),
    },

    {
      name: "Table",
      preview: (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th>Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cell</td>
            </tr>
          </tbody>
        </table>
      ),
    },

    {
      name: "Label",
      preview: <label htmlFor="demo">Label</label>,
    },

    {
      name: "Input",
      preview: <input id="demo" type="text" placeholder="Type here..." />,
    },

    {
      name: "Textarea",
      preview: <textarea placeholder="Textarea" />,
    },

    {
      name: "Select",
      preview: (
        <select defaultValue="">
          <option value="" disabled>
            Choose...
          </option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      ),
    },

    {
      name: "Button",
      preview: <button>Button</button>,
    },

    {
      name: "Small",
      preview: <small>Small text</small>,
    },

    {
      name: "Strong",
      preview: <strong>Strong text</strong>,
    },

    {
      name: "Emphasis",
      preview: <em>Italic text</em>,
    },

    {
      name: "Blockquote",
      preview: <blockquote>Design is intelligence made visible.</blockquote>,
    },

    {
      name: "Code",
      preview: <code>const hello = &apos;world&apos;</code>,
    },

    {
      name: "Pre",
      preview: (
        <pre>{`function hello() {
  return "Hello World";
}`}</pre>
      ),
    },
  ];

  return (
    <section className="bg-background min-h-screen p-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <h1>Typography & HTML Elements</h1>
          <p>Preview of all global typography and native HTML element styles.</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <article key={item.name} className="bg-card rounded-xl border p-6 shadow-sm">
              <h6 className="text-muted-foreground mb-4 text-center tracking-wider uppercase">
                {item.name}
              </h6>

              <div className="flex min-h-28 items-center justify-center overflow-auto">
                {item.preview}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypographyTest;
