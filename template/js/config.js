/*
 *  Copyright 2016 Google Inc.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License")
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/**
 * This is just a place to put all your API authentication keys
 */
Config = function() {
    return {
        // You will need to replace with your own Firebase configuration
        // This can be retrieved from clicking "Add App" from the project overview page.
        firebase: {
            apiKey: 'AIzaSyCl7oY_gdN1OLj8j2ZouMQIzCDH4vEsjKY',
            authDomain: 'battle-ex.firebaseapp.com',
            databaseURL: 'https://battle-ex.firebaseio.com',
            storageBucket: 'battle-ex.appspot.com',
            messagingSenderId: '979693056225'
        },
        // Replace with an API key for Google Cloud Vision API
        // DO NOT DO THIS IN PRODUCTION!!! For Demo purposes only.
        visionAPI: {
            // key: 'AIzaSyCl7oY_gdN1OLj8j2ZouMQIzCDH4vEsjKY' // firebase key
            key: 'AIzaSyBdB6y9dDgBFWf5YtXSU-IHzncvt7I5RQ0' // server key
            // key: 'AIzaSyCgT4EmJ13yIX1Lwu-xPE4Yd_nnifEtAsc' // key lain
        }
    }
}();
