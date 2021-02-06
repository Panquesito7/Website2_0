import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import { useState } from "react";

interface pluginProps {
	id: string;
	title: string;
	image: string;
	description: string;
	comingSoon?: boolean;
	active: boolean;
	setActive?: (value: boolean) => void;
}

const PluginCard = styled.div`
	background: #ffffff10;
	border-radius: 0.25rem;
	transition: 0.25s;
	cursor: pointer;
	position: relative;
	display: flex;
	min-width: 350px;
	min-height: 120px;
	padding: 20px;
	/* align-items: center; */
	box-shadow: 3px 3px 5px 0 #111;
	& > * + * {
		margin-left: 0.75rem;
	}
	@supports (gap: 10px) {
		gap: 0.75rem;
		& > * + * {
			margin-left: 0;
		}
	}
	& span:last-child,
	div:first-child {
		align-self: start;
	}
`;

const PluginTitle = styled.div`
	font-size: 1.25rem;
	font-weight: bold;
	text-transform: uppercase;
`;

const PluginBody = styled.div`
	font-weight: 400;
	color: #aaa;
	margin-top: 0.25rem;
	line-height: 1.5rem;
`;

const PluginItem = (props: pluginProps) => {
	const [checked, setChecked] = useState(props.active);

	return (
		<PluginCard>
			<div>
				<img src={`/${props.image}`} alt="" width={50} height={50} />
			</div>
			<div>
				<PluginTitle>{props.title}</PluginTitle>
				<PluginBody>{props.description}</PluginBody>
			</div>
			<Switch
				checked={checked}
				onChange={e => setChecked(e.target.checked)}
				color="primary"
				name="checkedB"
				inputProps={{ "aria-label": "primary checkbox" }}
			/>
		</PluginCard>
	);
};

export default PluginItem;
