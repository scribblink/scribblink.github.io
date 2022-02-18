import React from 'react';
import * as THREE from 'three';
import ThreeMeshUI from 'three-mesh-ui'
import FontJSON from './assets/Roboto-msdf.json';
import FontPNG from './assets/Roboto-msdf.png';
const topTen = new Array(10).fill('M3TA').map((item, idx) => `${item}${idx+1}`);;
const topAfterTen = new Array(10).fill('M3TA').map((item, idx) => `${item}${idx+11}`);

const createLeaderboard = (renderer, scene, camera) => {

  // Center Container
	const container = new ThreeMeshUI.Block({
        ref: "container",
        padding: 0.025,
        fontFamily: FontJSON,
        fontTexture: FontPNG,
        fontColor: new THREE.Color(0xffffff),
        backgroundOpacity: 0,
      });

      container.position.set(0, 1, -1.8);
      scene.add(container);


      const title = new ThreeMeshUI.Block({
        height: 0.2,
        width: 1.6,
        margin: 0.025,
        justifyContent: "center",
        fontSize: 0.09,
      });

      title.add(
        new ThreeMeshUI.Text({
          content: "M3TA AR Leaderboard",
        })
      );

      container.add(title);

      const leftSubBlock = new ThreeMeshUI.Block({
        height: 0.95,
        width: 1.0,
        margin: 0.025,
        padding: 0.025,
        alignContent: "left",
        justifyContent: "end",
      });

      const caption = new ThreeMeshUI.Block({
        height: 0.07,
        width: 0.37,
        alignContent: "center",
        justifyContent: "center",
      });

      caption.add(
        new ThreeMeshUI.Text({
          content: "The M3taverse.io",
          fontSize: 0.04,
        })
      );

      leftSubBlock.add(caption);

      const rightSubBlock = new ThreeMeshUI.Block({
        margin: 0.025,
      });

      const subSubBlock1 = new ThreeMeshUI.Block({
        height: 0.35,
        width: 0.5,
        margin: 0.025,
        padding: 0.02,
        fontSize: 0.04,
        justifyContent: "center",
        backgroundOpacity: 0,
      }).add(
        new ThreeMeshUI.Text({
          content: "Engagement Network For ",
        }),

        new ThreeMeshUI.Text({
          content: "People And Brands",
          fontColor: new THREE.Color(0x92e66c),
        }),
      );

      const subSubBlock2 = new ThreeMeshUI.Block({
        height: 0.53,
        width: 0.5,
        margin: 0.01,
        padding: 0.02,
        fontSize: 0.025,
        alignContent: "left",
        backgroundOpacity: 0,
      }).add(
        new ThreeMeshUI.Text({
          content:
            "Turn Your Best Visual Assets Into Touch-Less App (In Minutes) ",
        })
      );

      rightSubBlock.add(subSubBlock1, subSubBlock2);

      const contentContainer = new ThreeMeshUI.Block({
        contentDirection: "row",
        padding: 0.02,
        margin: 0.02,
        backgroundOpacity: 0,
      });

      contentContainer.add(leftSubBlock, rightSubBlock);
      container.add(contentContainer);

      new THREE.TextureLoader().load(require('./assets/Sparrowsvalley.jpeg'), (texture) => {
        leftSubBlock.set({
          backgroundTexture: texture,

        });
      });

      // Right Container 
      const containerRight = new ThreeMeshUI.Block({
        ref: "container",
        padding: 0.02,
        fontFamily: FontJSON,
        fontTexture: FontPNG,
        fontColor: new THREE.Color(0xffffff),
        backgroundOpacity: 0,
      });

      containerRight.position.set(1.2, 1.01, -1.6);
      containerRight.rotation.y = -0.55;
      scene.add(containerRight);

      const bodyRight = new ThreeMeshUI.Block({
        height: 1.25,
        width: .8,
        padding: 0.025,
        fontSize: 0.09,
				alignContent: "left",
      });
 
			topAfterTen.map((text, idx) => (
        bodyRight.add(
					new ThreeMeshUI.Text({
						content: `${idx + 11} ${text}\n`,
          })
        )
      ));

      containerRight.add(bodyRight);

      // Left Container
      const containerLeft = new ThreeMeshUI.Block({
        ref: "container",
        padding: 0.025,
        fontFamily: FontJSON,
        fontTexture: FontPNG,
        fontColor: new THREE.Color(0xffffff),
        backgroundOpacity: 0,
      });

      containerLeft.position.set(-1.2, 1.01, -1.6);
      containerLeft.rotation.y = 0.55;
      scene.add(containerLeft);

      const bodyLeft = new ThreeMeshUI.Block({
        height: 1.25,
        width: .8,
        padding: 0.025,
        fontSize: 0.09,
				alignContent: "left",
      });

      topTen.map((text, idx) => bodyLeft.add(
					new ThreeMeshUI.Text({
						content: `${idx + 1} ${text}\n`,
					})
			));

      containerLeft.add(bodyLeft);
      
      ThreeMeshUI.update();

			renderer.setAnimationLoop(() => {
				renderer.render(scene, camera);
			})
}

export default createLeaderboard;
