# typescript-bootplate - a TypeScript Build System by Grunt with resolving *.d.ts definitions

## How to use this

 1. fork this :D
 2. 'npm install' - installed toolset for this project
 3. edit tsd.json with tsd
 4. 'grunt install' - installed *.d.ts into typings
 5. 'grunt' - build all! :D

### fork this

     $ git clone http://github.com/kanryu/typescript-bootplate

### tsd.json

if you are a Windows User, type

    $ npm install -g tsd

if you begin with empty.

    $ tsd init

if you add *.d.ts for mocha:

    $ tsd query mocha -so -a install

and when you reflesh all:

    $ grunt install
or

    $ tsd reinstall -so

so, you can reference tsd.d.ts in src/*.ts as:

    /// <reference path="../typings/tsd.d.ts" />

have fun! :D


for more information: [github.com/DefinitelyTyped/tsd][1]

### build the project with grunt

you only type

    $ grunt

with all TypeScript in 'src/*' are compiled into 'released/*'!

if you want clean all, only type

    $ grunt clean


## Questions and Bug Reports

 * e-mail: k.kanryu@gmail.com
 * twitter: @junzabroP



## GitHub information

The source code is available at http://github.com/kanryu/typescript-bootplate
You can either clone the repository or download a tarball of the latest release.


## License

 Copyright 2014 KATO Kanryu

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


  [1]: https://github.com/DefinitelyTyped/tsd