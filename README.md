# eacardgen

WebAssembly vanity card generator for FeliCa e-amusement cards

## Usage

Cards can be used with GeneralFelicaSimulator on Android devices with [HCE-F](https://source.android.com/docs/core/connect/felica) support

For self-hosting the web version:

- Upload the files in the `html` directory to a web server
- Ensure the [correct headers are enabled](https://web.dev/articles/coop-coep) to allow for [pthread support](https://emscripten.org/docs/porting/pthreads.html)

`emrun` can be used to quickly [host a local web server](https://emscripten.org/docs/compiling/Running-html-files-with-emrun.html#running-html-files-with-emrun) with all the correct cross-origin headers already enabled

## Special thanks

- Bottersnike for their excellent [documentation on card IDs](https://eamuse.bsnk.me/cardid.html)