# &lt;bs-timeline&gt;

> Element providing a responsive timeline
> Based on
> http://www.bootsnipp.com/snippets/featured/timeline-responsive

## Demo

[Check it live!](http://h0ru5.github.io/bs-timeline)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install oce-timeline --save
```

Or [download as ZIP](https://github.com/h0ru5/bs-timeline/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/bs-timeline/dist/bs-timeline.html">
    ```

3. Start using it!

    ```html
        <bs-timeline>
		<bs-timeline-entry title="Geez!" time="11 hours ago until now" badge="plus">
			<p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
		</bs-timeline-entry>
	</bs-timeline>
    ```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`title`       | *string*    | ``           | The title
`time`        | *string*    | ``           | The time of the event
`badge`       | *string*    | `plus`       | Glyphicon to use for the entry
`opened`      | *boolean*   | `true`       | Display collapsed or opened
`inverse`     | *boolean*   | `false`      | Display inverted (right side)



## Methods

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
`toggle()`    | None.        | Nothing.    | Open/close the entry

## Events

Event         | Description
---           | ---
`onsomething` | Triggers when something happens.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```

* To build the distribution files before releasing a new version.

    ```sh
    $ grunt build
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/h0ru5/bs-timeline/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
