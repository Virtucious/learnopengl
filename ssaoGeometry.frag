#version 330 core

layout (location = 0) out vec3 gPosition;
layout (location = 1) out vec3 gNormal;
layout (location = 2) out vec3 gAlbedo;

in vec2 TexCoords;
in vec3 FragPos;
in vec3 Normal;

void main()
{
	//store the fragment position vector in the first gBuffer texture
	gPosition = FragPos;
	//also store the per-fragment normals into gBuffer
	gNormal = normalize(Normal);
	//and the diffuse per-fragment buffer
	gAlbedo.rgb = vec3(0.95f);
}