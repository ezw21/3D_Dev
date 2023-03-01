/*
 * Copyright 2019 Esri
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { tsx } from "esri/widgets/support/widget";
import HomeSection from "./sections/HomeSection";
import { FloorsSection, Floor } from "./sections/FloorsSection";
import SurroundingsSection from "./sections/SurroundingsSection";
import Collection from "esri/core/Collection";
import { Timetable } from "./widgets/Timetable/Timetable";

export const portalUrl = "https://eaglelabs.maps.arcgis.com";

export const websceneId = "c15999d9e578406a8a2b889f666d7ae9";

export const sections = [
  // Check the different files
  // to adapt to your need
  // or create a new section by
  // implement a subclass from `Section`

  // The about Turangua section:
  new HomeSection({
    content: (that: any) => (
      <p>
        Te Pae Christchurch Convention Centre has been designed as Ōtautahi
        Christchurch’s ‘gathering place’. A key part of the regeneration of the
        city, the Government’s investment in Te Pae Christchurch is set to act
        as a catalyst – not only for the growth and development of the city, but
        as a way of building lasting social, cultural and economic connections
        between the region and the world.
      </p>
    ),
    timetable: new Timetable({
      dates: new Collection([]),
    }),
  }),
  // The different floors for Turanga:
  new FloorsSection({
    floors: new Collection([
      new Floor({
        title: "He Hononga",
        subtitle: "connection",
        audio:
          "https://my.christchurchcitylibraries.com/wp-content/uploads/sites/5/2019/01/He-Hononga.mp3",
        floor: 0,
        content: (that: any) => (
          <div id="connection" bind={that} key={that}>
            <p>
              <span>
                Open an hour earlier than the rest of the building on weekdays,
                He Hononga | Connection, Ground Level is the place to return
                library items, collect holds, browse magazines, DVDs and new
                arrivals, visit the café or interact with the Discovery Wall.
              </span>
            </p>
          </div>
        ),
      }),
      new Floor({
        title: "Hapori",
        subtitle: "community",
        audio:
          "https://my.christchurchcitylibraries.com/wp-content/uploads/sites/5/2019/01/Hapori.mp3",
        floor: 1,
        content: (that: any) => (
          <div id="community" bind={that} key={that}>
            <p>
              <span>
                It offers experiences geared towards a wide cross-section of our
                community. Grab a hot drink at the espresso bar, attend an event
                in our community arena, or help the kids explore the play and
                craft areas and children’s resources. It’s also a great place
                for young adults to hang out, play videogames, try out VR or get
                some study done.
              </span>
            </p>
          </div>
        ),
      }),
      new Floor({
        title: "Tuakiri",
        subtitle: "identity",
        audio:
          "https://my.christchurchcitylibraries.com/wp-content/uploads/sites/5/2019/01/Tuakiri.mp3",
        floor: 2,
        content: (that: any) => (
          <div id="identity" bind={that} key={that}>
            <p>
              <span>
                Find resources and services to help you develop your knowledge
                about your own identity, your ancestors, your whakapapa and also
                about the place that they called home – its land and buildings.
              </span>
            </p>
          </div>
        ),
      }),
      new Floor({
        title: "Tūhuratanga",
        subtitle: "discovery",
        audio:
          "https://my.christchurchcitylibraries.com/wp-content/uploads/sites/5/2019/01/T%C5%ABhuratanga.mp3",
        floor: 3,
        content: (that: any) => (
          <div id="discovery" bind={that} key={that}>
            <p>
              <span>
                Explore the nonfiction collection with thousands of books on a
                huge range of subjects. Get help with print and online resources
                for research or recreation. Use the public internet computers
                or, for those who want a low-key space to read or study, there
                is a separate room called &lsquo;The Quiet Place&rsquo;. Study,
                research or browse for some recreational reading.
              </span>
            </p>
          </div>
        ),
      }),
      new Floor({
        title: "Auahatanga",
        subtitle: "creativity",
        audio:
          "https://my.christchurchcitylibraries.com/wp-content/uploads/sites/5/2019/01/Auahatanga.mp3",
        floor: 4,
        content: (that: any) => (
          <div id="creativity" bind={that} key={that}>
            <p>
              <span>
                Browse the World Languages, Music and Fiction collections,
                including Biographies and Graphic Novels. Visit the two roof
                gardens with great views across the city. Explore your
                creativity in the Production Studio using creative technology
                such as 3D printers and sewing machines. Create and edit music
                and video using the Audio/Video Studio, or take a class in the
                Computer Labs with a great range of software available.
              </span>
            </p>
          </div>
        ),
      }),
    ]),
  }),
  // Surroundings:
  new SurroundingsSection({}),
];

export const floorMapping = (originalFloor: number) => {
  let floor = originalFloor + 1;
  if (floor >= 3) {
    floor += 1;
  }

  return floor;
};

export const extraQuery =
  " AND (Category <> 'Generic Models' OR OBJECTID_1 = 2) AND Category <> 'Walls' AND Category <> 'Roofs'  AND Category <> 'Curtain Wall Mullions' AND Category <> 'Curtain Panels'";
