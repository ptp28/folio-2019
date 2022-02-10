import * as THREE from 'three'

export default class DistinctionASection
{
    constructor(_options)
    {
        // Options
        this.time = _options.time
        this.resources = _options.resources
        this.objects = _options.objects
        this.walls = _options.walls
        this.debug = _options.debug
        this.x = _options.x
        this.y = _options.y

        // Set up
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false

        this.setStatic()
        this.setCones()
        this.setWall()
    }

    setStatic()
    {
    }


    setCones()
    {
    }

    setWall()
    {
    }
}
