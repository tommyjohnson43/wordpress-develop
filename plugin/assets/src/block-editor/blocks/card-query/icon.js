/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Block Icon component.
 *
 * @return {JSX.Element} Function returning the HTML markup for the component.
 */
export const icon = () => (
	<span className="material-icons-outlined">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 0 24 24"
			width="24px"
			fill="#000000"
		>
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z" />
		</svg>
	</span>
);
