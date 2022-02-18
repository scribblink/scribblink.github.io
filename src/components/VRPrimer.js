import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';
import createLeaderboard from './Leaderboard';

const VRPrimer = () => {

	useEffect(() => {

		const initialize = () => {
			const camera = new THREE.PerspectiveCamera( 60, window.innerHeighth/window.innerWidth, 0.1, 100);
			
			const scene = new THREE.Scene();

			scene.add(new THREE.HemisphereLight(0x606060, 0x404040 ));

			const light = new THREE.DirectionalLight(0xffffff);
			light.position.set(1,1,1);
			scene.add(light);

			const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerHeight, window.innerWidth);
			renderer.outputEncoding = THREE.sRGBEncoding;

			document.body.appendChild(renderer.domElement);

			renderer.xr.enabled = true;

			const controls = new OrbitControls(camera, renderer.domElement);
			controls.target = new THREE.Vector3(0, 1, -1.8)
			camera.position.set(0, 1.6, 0);
			controls.update();

			const arButton = ARButton.createButton(renderer);
			document.body.appendChild(renderer.domElement);
			document.body.appendChild(arButton);

			const room = new THREE.LineSegments(
				new BoxLineGeometry( 6, 6, 6, 10, 10, 10 ).translate( 0, 3, 0 ),
				new THREE.LineBasicMaterial( { color: 0x808080 } )
			);

			scene.add( room );

      createLeaderboard(renderer, scene, camera);
    }
      // window.addEventListener('resize', resize)

		initialize();
		// return _ => {
		// 	window.removeEventListener('resize', resize);
		// }
	}, [])

	return (
	<div />
	)
}

export default VRPrimer