const startScene = async(mind, id) =>  {

      const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.body,
        imageTargetSrc: mind
      })

      const { renderer, scene, camera }  = mindarThree;

      const light = new THREE.HemisphereLight(0x0000ff, 0xbbbbff, 1);
   
      scene.add(light);

      const modelKeys = [id];

      var filteredArray = models.filter(function(itm){
        return modelKeys.indexOf(itm.id) > -1;
      });

      const m3ta = await loadGLTFModal(filteredArray[0].glb);
      m3ta.scene.scale.set(.5, .5, .5);
      m3ta.scene.position.set(0,-0.4, 0);

      const svAnchor = mindarThree.addAnchor(0);
      svAnchor.group.add(m3ta.scene);

      await mindarThree.start();

      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera)
      })
    }